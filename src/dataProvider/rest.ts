import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import { SERVER_ORIGIN } from '../constants';

const apiUrl = SERVER_ORIGIN;
const httpClient = (url:string, options = {} as any) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

interface IGetListParams {
    pagination: {
        page: number,
        perPage: number,
    },
    sort: {
        field: string,
        order: string,
    },
    filter: {
        [x:string]: string,
    }
}

interface IGetOneParams {
    id: number,
}

interface IGetManyParams {
    ids: number[]
}
interface IGetManyReferenceParams  extends  IGetListParams{
  target: string,
  id: number,
}
interface IUpdateParams {
    id: number,
    data: {
        [x:string]: string,
    }
}

interface IUpdateManyParams {
    ids: number[],
    data: {
        [x:string]: string,
    }
}

interface ICreateParams {
    data: {
        [x:string]: string,
    }
}

export default {
    getList: (resource:string, params: IGetListParams) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;

        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }:any) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    getOne: (resource:string, params: IGetOneParams) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }:any) => ({
            data: json,
        })),

    getMany: (resource:string, params: IGetManyParams) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }:any) => ({ data: json }));
    },

    getManyReference: (resource:string, params: IGetManyReferenceParams) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }:any) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    update: (resource:string, params: IUpdateParams) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }: any) => {
          
            return { data: json }
        }),

    updateMany: (resource:string, params: IUpdateManyParams) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }:any) => ({ data: json }));
    },

    create: (resource:string, params:ICreateParams) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }:any) => {
            const {code, reason, id } = json;
            if(code  && code.includes('create:fail')){
                throw new Error(reason);
            }
            return {
                data: { ...params.data, id },
                id: json.id
            }
        }),
    delete: (resource:string, params: IGetOneParams) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }:any) => ({ data: json })),

    deleteMany: (resource:string, params: IUpdateManyParams) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data),
        }).then(({ json }:any) => ({ data: json }));
    },
};
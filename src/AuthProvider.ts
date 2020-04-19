// in src/authProvider.ts
const apiUrl = "http://localhost:8080";
interface ILoginParams {
    username: string,
    password: string,
}
interface ICheckErrorParams {
    status: number,
    statusText: string,
}

const headers: any = {
    'content-type': 'application/json',
    'Accept': 'application/json'
};

export default {
    // called when the user attempts to log in
    login: async (params: ILoginParams) => {
        const { token, code, userId }: any = await fetch(`${apiUrl}/login`, {
            headers, body: JSON.stringify(params), method: "POST"
        }).then((response: Response) => {
            return response.json()
        })
        if (code === "user:login.success") {
            localStorage.setItem("token", token);
            if (userId) {
                localStorage.setItem("userId", userId.toString());
            }
            return Promise.resolve();
        }
        return Promise.reject();
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }: ICheckErrorParams) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: async () => {
        const token = localStorage.getItem('token');
        if (token) {
            headers["Authorization"] = `Bearer ${token}`
        }
        return fetch(`${apiUrl}/check`, {
            headers, method: "GET"
        }).then((response: Response) => {
            return response.json();
        }).then((data: any) => {
            if (data.isLogined) {
                return Promise.resolve();
            } else {
                localStorage.removeItem('token')
                return Promise.reject();
            }

        })

    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};
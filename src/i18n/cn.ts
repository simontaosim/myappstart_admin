import { TranslationMessages } from 'ra-core';

const customEnglishMessages: TranslationMessages = {
    ra: {
        action: {
            delete: '删除',
            show: '查看',
            list: '列表',
            save: '保存',
            create: '新建',
            edit: '编辑',
            sort: '排序',
            cancel: '取消',
            undo: '撤销',
            refresh: '刷新',
            add: '增加',
            remove: '删除',
            add_filter: '增加检索',
            remove_filter: '移除检索',
            back: '回退',
            bulk_actions: '选中%{smart_count}项',
            export: '导出',
            search: '检索',
            close_menu: '关闭菜单',
            clear_input_value: '清除',
            clone: "复制",
            close: '关闭',
            confirm: '确认',
            expand: '展开',
            open_menu: '打开菜单'

        },
        boolean: {
            true: '是',
            false: '否',
            null: "不存在"
        },
        page: {
            list: '%{name} 列表',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: '新建 %{name}',
            dashboard: '概览',
            not_found: '未发现',
            loading: '加载中',
            error: '出现错误',
            empty: '空的',
            invite: '邀请'
        },
        input: {
            file: {
                upload_several:
                    '将文件集合拖拽到这里, 或点击这里选择文件集合.',
                upload_single: '将文件拖拽到这里, 或点击这里选择文件.',
            },
            image: {
                upload_several:
                    '将图片文件集合拖拽到这里, 或点击这里选择图片文件集合.',
                upload_single:
                    '将图片文件拖拽到这里, 或点击这里选择图片文件.',
            },
            references: {
                all_missing: '未找到参考数据.',
                many_missing:
                    '至少有一条参考数据不再可用.',
                single_missing:
                    '关联的参考数据不再可用.',
            },
            password: {
                toggle_visible: "显示密码",
                toggle_hidden: "隐藏密码",
            }
        },
        message: {
            yes: '是',
            no: '否',
            are_you_sure: '您确定操作?',
            about: '关于',
            not_found:
                '您输入了错误的URL或者错误的链接.',
            loading: '正在加载页面, 请稍候',
            invalid_form: '表单输入无效. 请检查错误提示',
            delete_title: '删除 %{name} #%{id}',
            delete_content: '您确定要删除该条目?',
            bulk_delete_title:
                '删除 %{name} |||| 删除 %{smart_count}项 %{name} ',
            bulk_delete_content:
                '您确定要删除 %{name}? |||| 您确定要删除 %{smart_count} 项?',
            unsaved_changes: "未保存更改",
            details: "详细",
            error: "错误"
        },
        navigation: {
            no_results: '结果为空',
            no_more_results:
                '页码 %{page} 超出边界. 试试上一页.',
            page_out_of_boundaries: '页码 %{page} 超出边界',
            page_out_from_end: '已到最末页',
            page_out_from_begin: '已到最前页',
            page_range_info: '%{offsetBegin}-%{offsetEnd} / %{total}',
            page_rows_per_page: '每页行数:',
            next: '向后',
            prev: '向前',
        },
        auth: {
            user_menu: '设置',
            username: '用户名',
            password: '密码',
            sign_in: '登录',
            sign_in_error: '验证失败, 请重试',
            logout: '退出',
            auth_check_error: "会话过期，请重新登录",
        },
        notification: {
            updated: '条目已更新 |||| %{smart_count} 项条目已更新',
            created: '条目已新建',
            deleted: '条目已删除 |||| %{smart_count} 项条目已删除',
            bad_item: '不正确的条目',
            item_doesnt_exist: '条目不存在',
            http_error: '与服务通信出错',
            canceled: '取消动作',
            data_provider_error:'dataProvider错误. 请检查console的详细信息.',
            i18n_error: "翻译错误",
            logged_out: "已经退出",
        },
        validation: {
            required: '必填',
            minLength: '必须不少于 %{min} 个字符',
            maxLength: '必须不多于 %{max} 个字符',
            minValue: '必须不小于 %{min}',
            maxValue: '必须不大于 %{max}',
            number: '必须为数字',
            email: '必须是有效的邮箱',
            oneOf: '必须为: %{options}其中一项',
            regex: '必须符合指定的格式 (regexp): %{pattern}',
        },
    },
    "Forbidden": "缺少权限",
    'Failed to fetch': "与服务器连接失败",
    resource_names: {
        posts: "文章",
    },
    pos: {
        search: '搜索',
        configuration: '设置',
        language: '语言',
        theme: {
            name: '主题',
            light: '明快',
            dark: '沉暗',
        },
        dashboard: {
            monthly_revenue: 'Monthly Revenue',
            new_orders: 'New Orders',
            pending_reviews: 'Pending Reviews',
            new_customers: 'New Customers',
            pending_orders: 'Pending Orders',
            order: {
                items:
                    'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
            },
            welcome: {
                title: 'Welcome to react-admin demo',
                subtitle:
                    "This is the admin of an imaginary poster shop. Feel free to explore and modify the data - it's local to your computer, and will reset each time you reload.",
                aor_button: 'react-admin site',
                demo_button: 'Source for this demo',
            },
        },
        menu: {
            sales: 'Sales',
            catalog: 'Catalog',
            customers: 'Customers',
            permissions: "权限管理"
        },
    },
    resources: {
        customers: {
            name: 'Customer |||| Customers',
            fields: {
                commands: 'Orders',
                first_seen: 'First seen',
                groups: 'Segments',
                last_seen: 'Last seen',
                last_seen_gte: 'Visited Since',
                name: 'Name',
                total_spent: 'Total spent',
                password: 'Password',
                confirm_password: 'Confirm password',
            },
            fieldGroups: {
                identity: 'Identity',
                address: 'Address',
                stats: 'Stats',
                history: 'History',
                password: 'Password',
                change_password: 'Change Password',
            },
            page: {
                delete: 'Delete Customer',
            },
            errors: {
                password_mismatch:
                    'The password confirmation is not the same as the password.',
            },
         
        },
        users: {
            name: "用户",
            fields: {
                username: '用户名',
                updatedDate: "更新于",
                createdDate: '创建于',
                roleIds: "角色"
            },
        },
        permissions: {
            name: "权限",
            fields: {
                resource: '资源',
                updatedDate: "更新于",
                createdDate: '创建于',
                get: "列表",
                put: "更新",
                post: "新建",
                remove: '删除',
                grant: "授权",
                roleId: "角色"
            },
        },
        roles: {
            name: "角色",
            fields: {
                name_zh: '角色名',
                updatedDate: "更新于",
                createdDate: '创建于'
            },
        },
        posts: {
            name: "文章"
        },
        commands: {
            name: 'Order |||| Orders',
            amount: '1 order |||| %{smart_count} orders',
            title: 'Order %{reference}',
            fields: {
                basket: {
                    delivery: 'Delivery',
                    reference: 'Reference',
                    quantity: 'Quantity',
                    sum: 'Sum',
                    tax_rate: 'Tax Rate',
                    total: 'Total',
                    unit_price: 'Unit Price',
                },
                customer_id: 'Customer',
                date_gte: 'Passed Since',
                date_lte: 'Passed Before',
                total_gte: 'Min amount',
                status: 'Status',
                returned: 'Returned',
            },
        },
        invoices: {
            name: 'Invoice |||| Invoices',
            fields: {
                date: 'Invoice date',
                customer_id: 'Customer',
                command_id: 'Order',
                date_gte: 'Passed Since',
                date_lte: 'Passed Before',
                total_gte: 'Min amount',
                address: 'Address',
            },
        },
        products: {
            name: 'Poster |||| Posters',
            fields: {
                category_id: 'Category',
                height_gte: 'Min height',
                height_lte: 'Max height',
                height: 'Height',
                image: 'Image',
                price: 'Price',
                reference: 'Reference',
                stock_lte: 'Low Stock',
                stock: 'Stock',
                thumbnail: 'Thumbnail',
                width_gte: 'Min width',
                width_lte: 'Max width',
                width: 'Width',
            },
            tabs: {
                image: 'Image',
                details: 'Details',
                description: 'Description',
                reviews: 'Reviews',
            },
        },
        categories: {
            name: 'Category |||| Categories',
            fields: {
                products: 'Products',
            },
        },
        reviews: {
            name: 'Review |||| Reviews',
            amount: '1 review |||| %{smart_count} reviews',
            relative_to_poster: 'Review on poster',
            detail: 'Review detail',
            fields: {
                customer_id: 'Customer',
                command_id: 'Order',
                product_id: 'Product',
                date_gte: 'Posted since',
                date_lte: 'Posted before',
                date: 'Date',
                comment: 'Comment',
                rating: 'Rating',
            },
            action: {
                accept: 'Accept',
                reject: 'Reject',
            },
            notification: {
                approved_success: 'Review approved',
                approved_error: 'Error: Review not approved',
                rejected_success: 'Review rejected',
                rejected_error: 'Error: Review not rejected',
            },
        },
        segments: {
            name: 'Segments',
            fields: {
                customers: 'Customers',
                name: 'Name',
            },
            data: {
                compulsive: 'Compulsive',
                collector: 'Collector',
                ordered_once: 'Ordered once',
                regular: 'Regular',
                returns: 'Returns',
                reviewer: 'Reviewer',
            },
        },
    },
};

export default customEnglishMessages;
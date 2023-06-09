import { loginEndpoint } from "@/endpoints/loginEndpoint";

export async function authReducer(userData, action) {
    let res;
    let user = { email: '', name: '', id: 0 };

    switch (action.type) {
        case 'logout':
            res = { user, token: '' };
        case 'login':
            const { data: token } = await loginEndpoint(userData);
            res = { user, token };
        default:
            res = { user, token: '' };;
    }
    return res;
}
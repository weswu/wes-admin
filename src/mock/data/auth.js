import { parseURL } from '@/utils/util';
import { okJsonify, failJsonify } from './utils';

const users = {
  general: {
    name: 'visitor',
    email: 'visitor@gmail.com',
    role: 'general',
    avatar: 'https://himg.bdimg.com/sys/portrait/item/pp.1.ee3b62b9.izo7HigLPJaXQpExRr8j-A.jpg',
    token: 'mock-token-general',
  },
  admin: {
    name: 'Wes',
    email: 'tianyiming26@gmail.com',
    role: 'admin',
    avatar: 'https://himg.bdimg.com/sys/portrait/item/pp.1.ee3b62b9.izo7HigLPJaXQpExRr8j-A.jpg',
    token: 'mock-token-admin',
  },
};

export default {
  login: (params) => {
    const { username } = JSON.parse(params.body);
    const user = users[username];
    return user ? okJsonify({ access_token: users[username].token }) : failJsonify('invalid login or password');
  },
  usersMe: (params) => {
    const { token } = parseURL(params.url).params;
    const temp = token.match(/mock-token-(.*)/);
    const user = temp ? users[token.match(/mock-token-(.*)/)[1]] : '';
    return user ? okJsonify(user) : failJsonify();
  },
  logout: () => (okJsonify()),
};

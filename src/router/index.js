import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'books',
        component: () => import('@/pages/books.vue'),
    },
    {
        path: '/books',
        name: 'books',
        component: () => import('@/pages/books.vue'),
    },
    {
        path: '/books/:bookId',
        name: 'bookDetail',
        component: () => import('@/pages/booksDetail.vue'),
    },
    {
        path: '/books/edit/:bookId',
        name: 'bookEdit',
        component: () => import('@/pages/booksDetail.vue'),
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
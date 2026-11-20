import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    projects = [
        {
            id: 1,
            title: 'Digital Hymn Book',
            description: 'A digital platform for browsing hymns, exploring categories and managing favourite hymns.',
            technology: 'Angular',
            githubUrl: 'https://github.com/EstherOluyemi/digital-hymn-book',
            liveUrl: 'https://digital-hymn-book.vercel.app/',
            imageUrl: '/assets/images/hymnbook-ss.jpg',
        },
        {
            id: 2,
            title: 'Accessible Peer-to-Peer Learning System',
            description: 'A peer-to-peer learning platform designed to support collaborative learning and knowledge sharing.',
            technology: 'React',
            githubUrl: 'https://github.com/EstherOluyemi/Peer-Learning-system',
            liveUrl: 'https://peer-learning-system.vercel.app/',
            imageUrl: '/assets/images/p2p-ss.jpg',
        },
        {
            id: 3,
            title: 'Personal Portfolio',
            description: 'A personal portfolio showcasing my frontend development skills and projects.',
            technology: 'Angular',
            githubUrl: 'https://github.com/EstherOluyemi/esther-portfolio',
            liveUrl: 'https://esther-portfolio-tan-six.vercel.app/',
            imageUrl: '/assets/images/portfolio-ss.jpg',
        },

    ];
}
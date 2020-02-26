(function () {
    'use strict';

    const POSTS = [
        {
            heading: 'CSS: Grid',
            intro: 'CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a 1-dimensional system.',
            img: 'https://images.pexels.com/photos/1669018/pexels-photo-1669018.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            url: 'https://css-tricks.com/snippets/css/complete-guide-grid/'
        },
        {
            heading: 'CSS: Flexbox',
            intro: 'The Flexbox Layout was created to provide a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown or dynamic.',
            img: 'https://images.pexels.com/photos/159519/back-to-school-paper-colored-paper-stationery-159519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/'
        },
        {
            heading: 'CSS: Animations',
            intro: 'Just everything you need to know about animations, transitions and @keyframes.',
            img: 'https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            url: 'https://css-tricks.com/almanac/properties/a/animation/'
        },
        {
            heading: 'HTML: Semantic',
            intro: 'The purpose of HTML tags is to deliver meaning to a document. Don’t be concerned about how your webpage looks like. Focus on the significance of each tag you’ll use.',
            img: 'https://images.pexels.com/photos/1882014/pexels-photo-1882014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            url: 'https://developer.mozilla.org/de/docs/Web/HTML/HTML5/HTML5_element_list'
        },
        {
            heading: 'JS: ECMAScript 6',
            intro: 'ECMAScript 6 is also known as ES6 and ECMAScript 2015. Some people call it JavaScript 6. This chapter will introduce some of the new features in ES6.',
            img: 'https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            url: 'https://medium.com/@aravishack/es6-features-a-walk-through-1ffd8eb82f6'
        },
        {
            heading: 'Matching colors',
            intro: 'Color Hunt is a free and open platform for color inspiration with thousands of trendy hand-picked color palettes.',
            img: 'https://images.pexels.com/photos/1919190/pexels-photo-1919190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            url: 'https://colorhunt.co/'
        },
        {
            heading: 'Webpack',
            intro: 'Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.',
            img: 'https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            url: 'https://webpack.js.org/guides/getting-started/'
        },
        {
            heading: 'Animation snippets',
            intro: 'A free collection of CSS3/HTML snippets. New entries crafted and added daily.',
            img: 'https://images.pexels.com/photos/1586951/pexels-photo-1586951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            url: 'https://www.littlesnippets.net/'
        },
        {
            heading: 'Frontend Collective News',
            intro: 'The Codrops Collective features the latest news and resources from the web design & web development community.',
            img: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            url: 'https://tympanus.net/codrops/collective/'
        }
    ];

    function createPost(postData) {
        let figure = document.createElement('figure');

        let link1 = document.createElement('a');
        link1.href = postData.url;

        let img = document.createElement('img');
        img.src = postData.img;
        img.alt = postData.heading;
        link1.appendChild(img);

        let caption = document.createElement('figcaption');

        let h2 = document.createElement('h2');

        let link2 = document.createElement('a');
        link2.href = postData.url;
        link2.innerText = postData.heading;

        h2.appendChild(link2);

        let p = document.createElement('p');
        p.innerText = postData.intro;

        caption.appendChild(h2);
        caption.appendChild(p);

        let overlay = document.createElement('div');
        link1.appendChild(overlay);

        figure.appendChild(link1);
        figure.appendChild(caption);

        return figure;
    }

    window.addEventListener('DOMContentLoaded', () => {

        const article = document.querySelector('main > article');

        POSTS.forEach(postData => {
            const post = createPost(postData);
            article.append(post);
        });
    });
})();

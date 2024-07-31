document.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(Draggable);

    const content = document.querySelector('.content');
    const hero = document.querySelector('.hero');
    const heroWrapper = document.querySelector('.wrapper');
    const heroFrames = document.querySelectorAll('.frame');
    const heroImages = document.querySelectorAll('.image');
    const followingSection = document.querySelector('.following-section');

    // Calculate the combined height of hero and followingSection
    const combinedHeight = hero.offsetHeight + followingSection.offsetHeight;

    const init = () => {
        gsap.from(heroFrames, {
            duration: 2,
            scale: 0,
            stagger: 0.5,
            ease: 'power2.out',
            onComplete: drag,
        });
    };

    const drag = () => {
        Draggable.create(heroWrapper, {
            type: 'y.x',

            bounds: {
                window,
            },
            inertia: true,
            throwProps: true,
            onDragStart: () => {
                gsap.to(heroImages, {
                    duration: 0.5,
                    scale: 1.2,
                    ease: 'power2.out',
                });
            },
            onDragEnd: () => {
                gsap.to(heroImages, {
                    duration: 0.5,
                    scale: 1,
                    ease: 'power2.out',
                });
            },
        });
    };

    window.onload = () => {
        init();
    };
});

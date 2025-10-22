declare module '@splidejs/react-splide' {
    import { ComponentType, ReactNode } from 'react';

    export interface SplideProps {
        options?: Record<string, any>;
        children?: ReactNode;
        className?: string;
        'aria-label'?: string;
    }

    export interface SplideSlideProps {
        children?: ReactNode;
        className?: string;
    }

    export const Splide: ComponentType<SplideProps>;
    export const SplideSlide: ComponentType<SplideSlideProps>;
}

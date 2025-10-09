declare module "@splidejs/react-splide" {
    import { ComponentType, PropsWithChildren } from "react";
    type SplideProps = PropsWithChildren<Record<string, unknown>>;
    export const Splide: ComponentType<SplideProps>;
    export const SplideSlide: ComponentType<SplideProps>;
}

import styled from 'styled-components';
import tw from "tailwind-styled-components"

const ContenedorPrincipal = tw.div`
    relative
    
`;

const ContenedorSlideShow = tw.div`
    flex
    flex-nowrap
    max-h-96
`

const Slide = tw.div`
    min-w-full
    overflow-hidden
    transition-all
    z-10
    max-h-96
    relative
    
`

const TextoSlide = tw.div`
    bg-black
    opacity-50 
    text-center 
    text-white 
    font-bold
    w-full 
    py-3 
    px-16 
    absolute 
    bottom-0
`

const Controles = tw.div`
    absolute
    top-0
    z-20
    w-full
    h-full
`

const BotonIzquierdo = tw.button`
    pointer-events-auto
    bg-none
    border-0
    pointer
    outline-none
    w-12
    h-full
    text-center
    absolute
    transition-all

    
`
const BotonDerecho = tw.button`
    pointer-events-auto
    bg-none
    border-0
    pointer
    outline-none
    w-12
    h-full
    text-center
    absolute
    transition-all
    right-0
    
    
`


export {
    ContenedorPrincipal,
    Slide,
    TextoSlide,
    ContenedorSlideShow,
    Controles,
    BotonIzquierdo,
    BotonDerecho
}
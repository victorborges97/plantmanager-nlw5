
//Tira o erro na hora de importa a imagem
declare module '*.png' {
    const content: any;
    export default content;
}
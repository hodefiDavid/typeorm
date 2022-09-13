export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TYPE = string;
            HOST = string;
            PORT = number;
            USERN = string;
            PASSWORD = string;
            DATABASE = string;
            ENV: 'test' | 'dev' | 'prod';
}
}
}
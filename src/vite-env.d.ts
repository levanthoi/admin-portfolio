/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_ENDPOINT_V1: string;
  readonly VITE_API_ENDPOINT_V2: string;
  readonly VITE_NAMESPACE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

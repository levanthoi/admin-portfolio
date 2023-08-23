export interface IRoute {
  path: string;
  component?: any;
  children?: IRoute[];
}

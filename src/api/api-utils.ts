export enum RestStatus {
    NotLastedYet = 'NotLastedYet',
    Downloading = 'Downloading',
    Success = 'Success',
    NotAuthenticated = 'NotAuthenticated',
    NotAuthorized = 'NotAuthorized',
    Error = 'Error',
}

export interface NotLastedYet {
    status: RestStatus.NotLastedYet;
}

export interface Downloading {
    status: RestStatus.Downloading;
}

export interface NotAuthenticated {
    status: RestStatus.NotAuthenticated;
}

export interface NotAuthorized {
    status: RestStatus.NotAuthorized;
}

export interface Success<T> {
    status: RestStatus.Success;
    data: T;
}

export interface Error {
    status: RestStatus.Error;
}

export type RestResource<T> =
    | NotLastedYet
    | Downloading
    | Success<T>
    | NotAuthenticated
    | Error
    | NotAuthorized;

export const getRestStatus = (responseStatus: number): RestStatus => {
    switch (responseStatus) {
        case 200: {
            return RestStatus.Success;
        }
        case 401: {
            return RestStatus.NotAuthenticated;
        }
        case 403: {
            return RestStatus.NotAuthorized;
        }
        default: {
            return RestStatus.Error;
        }
    }
};

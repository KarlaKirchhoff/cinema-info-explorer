function parseQueryParams(
    pageNumberStr: string,
    videoStr: string
): { pageNumber: number; video: boolean } {
    const pageNumber = Number(pageNumberStr);
    if (isNaN(pageNumber)) throw new Error('pageNumber deve ser um número válido');

    const video = videoStr.toLowerCase() === 'true';

    return { pageNumber, video };
}

export function parseQueryParams_StrBoolean(str: string): Boolean {
    const resp = str.toLowerCase();
    if (resp === 'true' || resp === 'false') return true
    return false;
}

export function parseQueryParams_StrNumber(str: string): Boolean {
    if(!isNaN(Number(str))) return true
    return false;
}
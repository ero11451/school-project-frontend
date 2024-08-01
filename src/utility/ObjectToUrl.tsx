export function objectToUrlParams(obj: Record<string , string | number>): string {
    if (typeof obj !== 'object' || obj === null) {
        throw new Error('Input must be a non-null object');
    }

    const params = Object.entries(obj)
        .filter(([ value]) => value !== undefined && value !== null)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');

    return params ? `?${params}` : '';
}
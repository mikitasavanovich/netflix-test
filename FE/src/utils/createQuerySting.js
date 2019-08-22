export default (params) => {
    const queryString = Object.keys(params)
        .reduce((result, next) => (
            params[next] !== undefined 
                ? `${result}&${next}=${params[next]}`
                : result
            ), ''
        );

    return queryString;
}
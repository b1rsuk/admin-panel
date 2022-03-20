const push = (router, namePage, number) => {
    if (namePage == 'services') 
        router.push(`/services/${number}`);
    else 
        router.push(`/table/${namePage}?id=${number}`);
}
export default push;
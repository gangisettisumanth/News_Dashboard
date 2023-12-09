export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

const apiKey = 'aed55fc89fe14fb6814a9d4eb215a9f6';

export const fetchNewsRequest = () => ({
    type: FETCH_NEWS_REQUEST,
    });

    export const fetchNewsSuccess = (news) => ({
    type: FETCH_NEWS_SUCCESS,
    payload: news,
    });

    export const fetchNewsFailure = (error) => ({
    type: FETCH_NEWS_FAILURE,
    payload: error,
    });



export const fetchNews = (country = 'us', page = 1, pageSize = 3) => {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;

    return async (dispatch) => {
        dispatch(fetchNewsRequest());

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            dispatch(fetchNewsSuccess(data.articles));
        } catch (error) {
            dispatch(fetchNewsFailure(error.message));
        }
    };
};



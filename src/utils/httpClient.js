
const API = "https://api.themoviedb.org/3";

export function get(path) {
    return (
        fetch(API + path, {
            headers: {
                Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWI4OWI1MDAwNTA4NjQxZmE2Y2VkNmNiOTcxZmEyMSIsInN1YiI6IjYxYzc3ZjU0YTkzZDI1MDA2MWFlZWY0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gcy1C8eJIsftBecyvEueqi_f6J5SMIvZag9OvGAPV18',
                "Content-Type": 'application/json;charset=utf-8'
            },
        }).then((result) => result.json())
    )
}


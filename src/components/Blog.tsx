import { MouseEvent } from 'react';

import blogData from '../../blog.json'


type Blog = {
    id: number,
    title: string,
    cover: string,
    author: string
}

export function Blog() {

    function handlerBtn(e: MouseEvent<HTMLElement>) {
        const id = e.currentTarget.id;
        console.log(e)
        console.log(id);
    }

    function handlerBtn2(e: MouseEvent<HTMLElement>) {
        const id = e.currentTarget.id;
        console.log(e)
        console.log(id);
    }

    return (
        <div className="container">
            <div className="blog">
                {blogData.map((blog: Blog) =>
                    <div className="card" key={blog.id}>
                        <img src={blog.cover} alt="" />
                        <div className="details">
                            <h2>{blog.title}</h2>
                            <h4>{blog.author}</h4>
                        </div>
                        <button id={String(blog.id)} onClick={handlerBtn}>Тест</button>
                        <button id={String(blog.id)} onClick={(e) => handlerBtn2(e)}>Тест</button>
                    </div>
                )}
            </div>

        </div>
    )
}

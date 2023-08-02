interface PostProps {
    userId: number
    id: number
    title: string
    body: string
}

interface PostsProps {
    posts: PostProps[];
    allPosts: PostProps[],
    limit: number;
    sorting: 'up' | 'down'
}

interface TitleProps {
    name: string
    onClick: any
    width: string
}

export type {
    PostProps,
    PostsProps,
    TitleProps
}

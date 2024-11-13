export type Slider={
    id:number,
    image: string,
    title: string,
  }

  export type NewsProps = {
    _id:string,
    title:string,
    description:string,
    snippet:string,
    url:string,
    imageUrl:string,
    language:string,
    published_at:Date,
    categories: string[],
    relevance_source:string

  }
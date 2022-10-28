import React from "react";
import { IBlog } from "./interfaces";

import { StyleBlog } from "./styles"

export function Blog({ text }: IBlog) {
    return <StyleBlog>{text}</StyleBlog>
}
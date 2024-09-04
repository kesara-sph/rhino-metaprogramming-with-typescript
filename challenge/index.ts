import type { AxiosInstance, AxiosResponse } from "axios";
import Axios from "axios";
import { Post, Query } from "./types";
import assert from "node:assert";
import test from "node:test";
import { trace } from "./decorators";

@trace()
class Challenge {
  private readonly client: AxiosInstance = Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });

  async getPosts(query?: Query): Promise<Post[]> {
    const params: Query = { _limit: 10, _page: 1, ...query };
    const response: AxiosResponse<Post[]> = await this.client.get("/posts", { params });
    return response.data;
  }

  async getComments(query?: Query): Promise<Comment[]> {
    const params: Query = { _limit: 10, _page: 1, ...query };
    const response: AxiosResponse<Comment[]> = await this.client.get("/comments", { params });
    return response.data;
  }
}

(async function () {
  const challenge: Challenge = new Challenge();

  await test("there should be 100 posts", async (t) => {
    const posts: Post[] = await challenge.getPosts();
    assert.ok(posts.length === 100);
  });

  await test("there should be 500 comments", async (t) => {
    const comments: Comment[] = await challenge.getComments();
    assert.ok(comments.length === 500);
  });
})();

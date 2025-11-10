import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const postWithIdAndDate = postsService.create(post);

   expect(postWithIdAndDate).toMatchObject({
    id: expect.any(String),
    text: expect.any(String),
    date: expect.any(String),
   })
  });

  it('should find a post', () => {
   const postWithIdAndDate = postsService.create(post);

   const found = postsService.find(postWithIdAndDate.id);

   expect(found).toEqual(postWithIdAndDate);
  });
});
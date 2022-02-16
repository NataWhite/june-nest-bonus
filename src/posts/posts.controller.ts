import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {FileInterceptor} from "@nestjs/platform-express";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
// import { Post } from "./posts.model";

@ApiTags('Posts')
@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {}

    @ApiOperation({summary: 'create new post'})
    // @ApiResponse({status: 201, type: Post})
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreatePostDto,
               @UploadedFile() image) {
        return this.postService.create(dto, image)
    }

    @ApiOperation({summary: 'create new post'})
    // @ApiResponse({status: 201, type: Post})
    @Get()
    getAllPosts() {
        return this.postService.getAllPost()
    }

}

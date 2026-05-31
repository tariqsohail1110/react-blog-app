import React, { useEffect, useState} from 'react';
import { Container, PostForm } from '../components/index.js';
import appwirteService from '../appwrite/config.js';
import { useNavigate, useParams } from 'react-router-dom';
import { FormProvider } from 'react-hook-form';

function EditPosts() {
    const[post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwirteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            })
        } else {
            navigate('/');
        }
    }, [slug, navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPosts

---
title: 'Stable Diffusion: A state-of-the-art text-to-image Model'
description: 'This article covers Stable Diffusion is a state-of-the-art text-to-image Model'
pubDate: 2022-04-23
pubBy: 'Abhishek Shukla'
heroImage: '/blog-placeholder-3.jpg'

blogCategory: 'Publication Updates'
blogTags: 
  -  dall-e 
  -  generative-adversarial-network
  -  stable-diffusion
  -  turing-test

blogCardImage:
  src: '/../../src/assets/Event-images/CPSPlenaryTalkImage.jpg'
  alt: 'Image description for the event'

readTime: '5 min'
---
# Stable Diffusion: A state-of-the-art text-to-image Model – CyPSi Lab – IIC
##### Stable Diffusion

Stable Diffusion is a text-based image generation machine learning model like [DALL-E](https://openai.com/blog/dall-e/) released by [stability.ai](https://stability.ai/) (live example [here](https://huggingface.co/spaces/stabilityai/stable-diffusion)). Stability.ai has not just open-sourced its source code for academic purposes, but also released the model weights to create customized applications.  The AI model and its variants generate images based on a prompt and/or an input image. Unlike other text-to-image models such as DALL-E and [Midjourney](https://www.midjourney.com/home/) which were accessible only via cloud services,  stable diffusion code and model weights that have been released publicly can run on most consumer-grade hardware equipped with a modest GPU. 

AI models such as Generative Adversarial Networks (GAN) have been the standard way for generating images from scratch in the past. GAN learns to generate new data with the same statistics as the input training set using reinforcement learning ([learn more](https://github.com/streamlit/demo-face-gan)). However, training GANs becomes complicated when it is attempted to train the generator as well as the discriminator extremely well. A very well-trained generator model leads to a worse discriminator model as the fundamental motivation of the two networks are opposite in nature. As mentioned in [this](https://analyticsindiamag.com/diffusion-models-vs-gans-which-one-to-choose-for-image-synthesis/) article, other common and related issues with GANs are as follows :-

1.  Failure to Converge
2.  Mode Collapse
3.  Vanishing Gradients

**Working of Stable Diffusion**

Stable Diffusion can produce high-quality images using the concept of Super Resolution. Using super-resolution, a deep learning model is trained, which is used to denoise an input image and generate a high-resolution image as an output.

![](https://miro.medium.com/max/788/1*yy9__bsqmK_rZdJze3RQDQ.png)

**_Fig 1:_** **_Overview of Stable Diffusion Model_** _(_[_fig source link_](https://medium.com/mlearning-ai/stable-diffusion-from-description-to-visualization-381113890b7)_)_

As shown in Figure 1, Stable Diffusion Model comprises the following components.

1.  **Text Encoder:**  After taking the user input this particular component converts it to a vector form.  
    The text encoder is responsible for text processing, transforming the prompt into an embedding space. Similar to Google’s Imagen, Stable Diffusion uses a frozen CLIP ViT-L/14 Text Encoder.\[1\]
2.  **Random Noise Generator**: RNG learns to create fake images by incorporating feedback from the discriminator. It learns to make the discriminator classify its output as real. Generator training requires tighter integration between the generator and the discriminator as compared to the requirement of discriminator training.\[2\]
3.  **Diffusion Model:  It performs the denoising of the N\*N image matrix in the loop (loop count set to 50)**
4.   **Decoder:  The generator part of a GAN**

##### Our Experiment

We performed image-to-image stable diffusion on the images of our lab members for style transfer using [this](https://huggingface.co/spaces/fffiloni/stable-diffusion-img2img) hugging-face repository. The text prompt used was _van gogh_. The following parameter values were used.

1.  **Guidance Scale** – 9.4
2.  **Number of Iterations** – 25
3.  **Seed** – 1006602893
4.  **Strength** – 0.15

![Fig 2- Input and output images](http://cps.iic.ac.in/wp-content/uploads/2023/02/5-1.jpg)

**_Fig 2:_** **Input and output images**

##### **References/More Resources on Stable Diffusion**

**_Blogs on Stable Diffusion_**

1.  [Stable Diffusion: From Description to Visualization](https://medium.com/mlearning-ai/stable-diffusion-from-description-to-visualization-381113890b7)
2.  [Stable Diffusion. The most impressive neural network. How to use this new AI tool?](https://medium.com/@itsalive/stable-diffusion-the-most-impressive-neural-network-how-to-use-this-new-ai-tool-b564ca6fad83)
3.  [Scalability.ai : Stable Diffusion](https://stability.ai/blog/stable-diffusion-public-release)

**_Videos on Stable Diffusion_**

1.  [How AI Image Generators Work (Stable Diffusion / Dall-E)](https://www.youtube.com/watch?v=1CIpzeNxIhU)
2.  [Stable Diffusion – What, Why, How?](https://www.youtube.com/watch?v=ltLNYA3lWAQ)

**_Code on Stable Diffusion_**

1.  [CompVis: Stable Diffusion](https://github.com/CompVis/stable-diffusion)
2.  [Google Colab File](https://colab.research.google.com/drive/1_kbRZPTjnFgViPrmGcUsaszEdYa8XTpq?usp=sharing) 
3.  [Stable Diffusion with diffusers](https://colab.research.google.com/github/huggingface/notebooks/blob/main/diffusers/stable_diffusion.ipynb)
4.  [High-performance image generation using Stable Diffusion in KerasCV](https://keras.io/guides/keras_cv/generate_images_with_stable_diffusion/)

**_Models on Stable diffusion on Hugging Face_**

1.  [Stability.AI : Stable Diffusion](https://huggingface.co/spaces/stabilityai/stable-diffusion)

**_References/ Research Papers on Stable Diffusion_**

1.  [High-Resolution Image Synthesis with Latent Diffusion Models](https://arxiv.org/pdf/2112.10752.pdf)
2.  [Stable Diffusion (Wikipedia)](https://en.wikipedia.org/wiki/Stable_Diffusion)
3.  [The Generator | Machine Learning | Google Developers](https://developers.google.com/machine-learning/gan/generator)

**Tags:** [Stable Diffusion](https://stability.ai/blog/stable-diffusion-public-release), [Turing Test](https://en.wikipedia.org/wiki/Turing_test), [Generative Adversarial Network](https://en.wikipedia.org/wiki/Generative_adversarial_network), [Dall-E](https://openai.com/dall-e-2/)
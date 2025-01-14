// export const addComment = async (name, comment, idPost) => {
//     try {
//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('comment', comment);
//         formData.append('idPost', idPost);

//         const response = await fetch('http://localhost/php-blog/api.php?path=addComment', {
//             method: 'POST',
//             body: formData,
//         });
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error adding comment:', error);
//         throw error;
//     }
// };


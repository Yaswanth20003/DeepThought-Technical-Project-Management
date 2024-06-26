function showContent() {
    const journey2 = document.getElementById('journey2');
    journey2.innerHTML = `
    <h2>• Explore the world of management</h2><br>
        <h3> • Technical Project Management</h3>
        <h3>• Threadbuild</h3>
        <h3>• Structure your pointers</h3>
        <h3>• 4SA Method</h3>
    `;
    journey2.classList.add('active');
}


document.addEventListener("DOMContentLoaded", function() {
    const submitTaskLink = document.getElementById('submitTask');

    submitTaskLink.addEventListener('click', function(event) {
        event.preventDefault();

        const text1Value = document.getElementById('text1').value;
        const text2Value = document.getElementById('text2').value;
        const text3Value = document.getElementById('text3').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        console.log("Sub thread 1:", text1Value);
        console.log("Sub Interpretation 1:", text2Value);
        console.log("Summary for Thread A:", text3Value);
        console.log("Title:", title);
        console.log("content:", content);
    });
});


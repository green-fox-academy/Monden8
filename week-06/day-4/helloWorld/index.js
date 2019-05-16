const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
    // render `home.ejs`
    res.render('home', {
        title: 'Hello World',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet efficitur justo vel iaculis. Cras hendrerit arcu id scelerisque mattis. Vestibulum in lacus luctus, varius ligula quis, fermentum mi. Nullam vehicula velit id quam rhoncus, ac molestie odio iaculis. Integer lobortis nec turpis ut dignissim. Donec commodo feugiat vehicula. In egestas luctus urna nec mollis. Donec vel egestas eros, non placerat erat. Fusce vestibulum felis sit amet elit sodales, in interdum ex iaculis. Vivamus in tincidunt lorem. Pellentesque euismod nec est quis sodales. Vestibulum lobortis magna eu diam rhoncus dignissim nec at ipsum. Sed at faucibus mauris, eu lobortis diam. Donec semper mi aliquet, vulputate odio vitae, dapibus dolor. In hac habitasse platea dictumst.
        Fusce accumsan et ipsum quis faucibus. Nam metus enim, volutpat ut volutpat ultricies, luctus eu mauris. Duis pulvinar semper ultrices. Nulla commodo, libero non laoreet tristique, neque enim tristique urna, quis pellentesque dui odio id quam. Nulla facilisi. Aliquam hendrerit, dui a dapibus pulvinar, purus orci dignissim ex, a pretium nunc turpis et elit. Nunc consequat, ex ut efficitur blandit, erat tellus suscipit nisi, ac pharetra risus libero et arcu. Nam augue nibh, ullamcorper in eleifend non, rutrum sit amet risus. Etiam vitae sapien ut nunc volutpat fringilla. Fusce hendrerit diam erat. Cras bibendum, nulla vitae tempor tristique, arcu nunc sagittis sapien, eu dictum purus massa sit amet libero. Curabitur faucibus consequat turpis a hendrerit. Mauris ac nulla ante. Nullam vel aliquam metus, at ornare tellus.`
    });
});


// start express app on port 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
import $ from './lib/lib';

// $('button').on('click', function() {
//     $('div').eq(1).toggleClass('active');
// });

// $('div').click(function() {
//     console.log($(this).index());
// });

// console.log($('div').eq(2).find('.some'));

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findme'));
// console.log($('.findme').siblings());
// $('.findme').fadeOut(1800);



// console.log($('button').html('Hello'));

//44 видео

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});
$('.wrap').html(
    `
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
            <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Action #2</a>
                <a href="#" class="dropdown-item">Action #3</a>
            </div>
    </div>
    `
);
$('.dropdown-toggle').dropdown();

$('#trigger').click(() => {
    $('#trigger').createModal({
        text: {
            title: 'Modal title',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusamus eius. Delectus ea praesentium culpa eaque enim temporibus error atque ipsa pariatur. Nihil adipisci rem eaque ipsa excepturi, incidunt beatae!',
        },
        btns: {
            count: 3,
            settings: [
                [
                    'Close', ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Save changes', ['btn-success'],
                    false,
                    () => {
                        alert('Данные сохранены');
                    }
                ],
                [
                    'Another btn', ['btn-warning', 'ml-10'],
                    false,
                    () => {
                        alert('Hello World');
                    }
                ]
            ]
        }
    });
});

$().get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res));
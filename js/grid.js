const handleTrack = () => {
  if ($('.item-1').hasClass('grid-track')) {
    for(let i = 1; i <= 3; i++) {
      const itemStr = ".item-" + i;
      $(itemStr).removeClass('grid-track');
    }
  } else {
    for(let i = 1; i <= 3; i++) {
      const itemStr = ".item-" + i;
      $(itemStr).addClass('grid-track');
    }
  }
}

const handleCell = () => {
  if ($('.item-5').hasClass('grid-cell')) {
      $('.item-5').removeClass('grid-cell');
  } else {
    $('.item-5').addClass('grid-cell');
  }
}

$('#track-button').on('click', handleTrack);
$('#cell-button').on('click', handleCell);
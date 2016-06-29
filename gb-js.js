/**
 * Created by Giovanni on 29/06/2016.
 */

var mousePos;

$("#Capa_2").mousedown(function () {
    $("#Capa_2").hide();
    $("#Capa_1").show();
    $("#Layer_1").show();
});
$("#Capa_1").mouseup(function () {
    $("#Capa_1").hide();
    $("#Layer_1").hide();
    $("#Capa_2").show();
});


document.onmousemove = handleMouseMove;
setInterval(getMousePosition, 100); // setInterval repeats every X ms

function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
            (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }

    mousePos = {
        x: event.x,
        y: event.y
    };

    $("#label").innerHTML="x: "+mousePos.x+" , y: "+mousePos.y;
}
function getMousePosition() {
    var pos = mousePos;
    if (!pos) {
        // We haven't seen any movement yet
    }
    else {
        // Use pos.x and pos.y
    }
}




// target elements with the "draggable" class
interact('.draggable')
    .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        restrict: {
            restriction: "parent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function (event) {
            //var textEl = event.target.querySelector('p');
            /*
            textEl && (textEl.textContent =
                'moved a distance of '
                + (Math.sqrt(event.dx * event.dx +
                    event.dy * event.dy)|0) + 'px');
                    */
        }
    });

function dragMoveListener (event) {
    var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

    //update items alpha
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;


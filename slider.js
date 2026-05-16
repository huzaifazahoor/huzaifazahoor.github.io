document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.slider-track-outer');
    const fill = document.getElementById('slider-fill');
    const thumbMin = document.getElementById('thumb-min');
    const thumbMax = document.getElementById('thumb-max');
    const minDisplay = document.getElementById('budget-min-display');
    const maxDisplay = document.getElementById('budget-max-display');
    const hiddenInput = document.getElementById('budget');

    if (!track || !fill || !thumbMin || !thumbMax) return;

    const MIN = 5000;
    const MAX = 1000000;
    const STEP = 5000;
    const GAP = 5000;

    let minVal = MIN;
    let maxVal = MAX;

    function fmt(v) {
        return v >= 1000000 ? '$1,000,000' : '$' + v.toLocaleString();
    }

    function pct(v) {
        return ((v - MIN) / (MAX - MIN)) * 100;
    }

    function snap(v) {
        return Math.round(v / STEP) * STEP;
    }

    function render() {
        const lo = pct(minVal);
        const hi = pct(maxVal);
        thumbMin.style.left = lo + '%';
        thumbMax.style.left = hi + '%';
        fill.style.left = lo + '%';
        fill.style.width = (hi - lo) + '%';
        minDisplay.textContent = fmt(minVal);
        maxDisplay.textContent = fmt(maxVal);
        thumbMin.setAttribute('aria-valuenow', minVal);
        thumbMax.setAttribute('aria-valuenow', maxVal);
        if (hiddenInput) hiddenInput.value = minVal + '-' + maxVal;
    }

    function valFromX(clientX) {
        const rect = track.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        return snap(MIN + ratio * (MAX - MIN));
    }

    function drag(onMove) {
        function onMouseMove(e) {
            e.preventDefault();
            onMove(e.clientX);
            render();
        }
        function onTouchMove(e) {
            e.preventDefault();
            onMove(e.touches[0].clientX);
            render();
        }
        function stop() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', stop);
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', stop);
        }
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', stop);
        document.addEventListener('touchmove', onTouchMove, { passive: false });
        document.addEventListener('touchend', stop);
    }

    thumbMin.addEventListener('mousedown', function (e) {
        e.preventDefault();
        drag(function (x) {
            minVal = Math.max(MIN, Math.min(snap(valFromX(x)), maxVal - GAP));
        });
    });

    thumbMin.addEventListener('touchstart', function (e) {
        e.preventDefault();
        drag(function (x) {
            minVal = Math.max(MIN, Math.min(snap(valFromX(x)), maxVal - GAP));
        });
    }, { passive: false });

    thumbMax.addEventListener('mousedown', function (e) {
        e.preventDefault();
        drag(function (x) {
            maxVal = Math.min(MAX, Math.max(snap(valFromX(x)), minVal + GAP));
        });
    });

    thumbMax.addEventListener('touchstart', function (e) {
        e.preventDefault();
        drag(function (x) {
            maxVal = Math.min(MAX, Math.max(snap(valFromX(x)), minVal + GAP));
        });
    }, { passive: false });

    thumbMin.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') minVal = Math.min(minVal + STEP, maxVal - GAP);
        if (e.key === 'ArrowLeft') minVal = Math.max(minVal - STEP, MIN);
        render();
    });

    thumbMax.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') maxVal = Math.min(maxVal + STEP, MAX);
        if (e.key === 'ArrowLeft') maxVal = Math.max(maxVal - STEP, minVal + GAP);
        render();
    });

    render();
});
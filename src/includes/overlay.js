import constants from '@/includes/constants';
import { createPopperLite as createPopper } from '@popperjs/core';

function _mediaQuery(x) {
  if (x.matches) {
    // Filter overlay
    const overlay = document.getElementById('filterOverlay'),
      anchor = document.getElementById('filterAnchor'),
      close = document.getElementById('closeFilterElement');

    if (anchor) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        overlay.classList.add('filterOverlay');
        overlay.classList.remove('filterOverlayHidden');
      });
    }

    if (close) {
      close.addEventListener('click', function (e) {
        e.preventDefault();
        overlay.classList.remove('filterOverlay');
        overlay.classList.add('filterOverlayHidden');
      });
    }
  } else {
    // Filter overlay
    let popperInstance = null;

    const template = document.getElementById('filterElement');

    const anchor = document.getElementById('filterAnchor'),
      close = document.getElementById('closeFilterElement');

    if (anchor) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if (anchor.classList.contains('isDisabled')) {
          return;
        }

        if (!popperInstance && template) {
          create(this, template);
          template.style.opacity = 1;
          anchor.classList.add('isDisabled');
        } else {
          destroy();
        }
      });
    }

    if (close) {
      close.addEventListener('click', function (e) {
        e.preventDefault();

        destroy();

        if (anchor) {
          anchor.classList.remove('isDisabled');
        }
      });
    }

    const create = (element, template) => {
      popperInstance = createPopper(element, template, {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [65, 15],
            },
          },
        ],
      });
    };

    const destroy = () => {
      if (popperInstance) {
        if (template) {
          template.style.opacity = 0;
        }

        setTimeout(() => {
          if (popperInstance) {
            popperInstance.destroy();
            popperInstance = null;
          }
        }, 600);
      }
    };
  }
}

export default function initFilterOverlay() {
  var query = window.matchMedia(
    `(max-width: ${constants.TABLET_AND_DESKTOP_PIXEL_SIZE})`,
  );

  _mediaQuery(query);
  query.addListener(_mediaQuery);
}

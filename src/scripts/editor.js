const classNames = require('classnames');

// Blocks to add the animate option to
const enableAnimateOptionsOnBlocks = ['core/heading'];

// Add custom attribute to block for animate
function setToolbarButtonAttribute(settings, name) {
  if (!enableAnimateOptionsOnBlocks.includes(name)) {
    return settings;
  }
  return Object.assign({}, settings, {
    attributes: Object.assign({}, settings.attributes, {
      animation: {
        type: 'string',
      },
    }),
  });
}
wp.hooks.addFilter('blocks.registerBlockType', 'custom-attributes/animation', setToolbarButtonAttribute);

// Add button to settings panel to activate/deactivate animation
const el = wp.element.createElement;

const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;
const { __ } = wp.i18n;

const withAnimateButton = wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    if (!enableAnimateOptionsOnBlocks.includes(props.name)) {
      return el(BlockEdit, { ...props });
    }
    const { attributes, setAttributes } = props;

    return el(
      wp.element.Fragment,
      {},
      el(
        InspectorControls,
        {},
        el(
          PanelBody,
          { title: __('Animation', 'mmb') },
          el(SelectControl, {
            label: __('Animation Options'),
            value: attributes.animation,
            options: [
              { value: 'none', label: 'None' },
              { value: 'up', label: 'Fade Up' },
            ],
            onChange: value => {
              setAttributes({ animation: value });
            },
          })
        )
      ),
      el(BlockEdit, { ...props })
    );
  };
}, 'withAnimateButton');
wp.hooks.addFilter('editor.BlockEdit', 'custom-attributes/with-animate-button', withAnimateButton);

// Save animation attribute to blocks

const saveAnimationAttribute = (extraProps, blockType, attributes) => {
  // Do nothing if it's another block than our defined ones
  if (enableAnimateOptionsOnBlocks.includes(blockType.name)) {
    const { animation } = attributes;
    if (animation && animation === 'up') {
      extraProps.className = classNames(extraProps.className, 'animation-up');
    }
  }
  return extraProps;
};

wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'custom-attributes/save-animation-attribute', saveAnimationAttribute);

// Add css class to block wrapper based on attribute
const withAnimationProp = wp.compose.createHigherOrderComponent(BlockListBlock => {
  return props => {
    // If current block is not allowed
    if (!enableAnimateOptionsOnBlocks.includes(props.name)) {
      return el(BlockListBlock, { ...props });
    }

    const { attributes } = props;
    const { animation } = attributes;

    if (animation && animation === 'up') {
      return el(BlockListBlock, { className: 'animation-up', ...props });
    } else {
      return el(BlockListBlock, { ...props });
    }
  };
}, 'withAnimationProp');
wp.hooks.addFilter('editor.BlockListBlock', 'custom-attributes/with-animation-prop', withAnimationProp);

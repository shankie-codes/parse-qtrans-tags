/* Apologies about this pretty non-JS coding style. It's pinched from https://github.com/qTranslate-Team/qtranslate-x/blob/e0e0c378308a5c1c7746357f04c41326feb05d64/qtranslate_core.php#L1038 */
const parseQTransTags = (text, lang) => {
  if (typeof text === 'string') {
    const blocks = getLanguageBlocks(text);
    const langObject = splitBlocks(blocks);

    const translated = langObject[lang.substring(0, 2)];
    return translated || text;
  }
  return ''; // We were passed something that wasn't a string
};

const splitBlocks = (blocks, found) => {
  const result = {};
  let blockLang = '';

  blocks.forEach(block => {
    // console.log(blocks);
    if (block.match(/^\[:([a-z]{2})\]$/)) {
      // console.log(block.match(/^\[:([a-z]{2})\]$/));
      blockLang = block.match(/^\[:([a-z]{2})\]$/)[1];
    } else {
      switch (block) {
        case '[:]':
          blockLang = '';
          break;
        default:
          // console.log(`Blocklang is ${blockLang}`);
          // console.log(`Block is ${block}`);
          if (blockLang) {
            // console.log("doing the setting");
            // console.log(block, blockLang);
            // if (typeof result[blockLang] === "undefined") result[blockLang] = "";
            result[blockLang] += block;
            blockLang = '';
          }
          break;
      }
    }
  });
  return result;
};

const getLanguageBlocks = text =>
  text.split(/(<!--:[a-z]{2}-->|<!--:-->|\[:[a-z]{2}\]|\[:\])/);

export default parseQTransTags;

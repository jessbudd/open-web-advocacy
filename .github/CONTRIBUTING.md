# Contributing

First off, thanks for taking the time to contribute!

To contribute to code or an existing note in this repository, first create a fork and then make a change on your fork. Next, create a pull request that contains your changes to a document. Your pull request will be reviewed by a project maintainer and then merged into the main repository.

## Help with website translations

If you're comfortable with code, please follow the instructions below. If you're not comfortable with code but still want to help, reach out to us on [Discord](https://discord.gg/x53hkqrRKx).

### Adding a new language

#### 1. Add language folder and base pages
From the root project directory, run `node generate-language-files.js {newLanguageCode}`. The new language code should match the [ISO language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes). 

This script will:
- create a new folder with the language code as the name
- create a copy of each page located in `src/pages` into the new language folder
- update the page permalinks to prepend the language code
- add `translated: false` to the page's front matter


#### 2. Translate global content

Global content is located in two files:
- `_data/navigation.json`
- `_data/languages_base.json`

Update both files above with the new language translations. 

The object keys should match the [ISO language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes).

The new language object in the data files must include all properties on the `en` object.

The url of navigation links should remain in english.


#### 3. Translate pages
Translate the copied version of the homepage, and any additional pages you would like, into the new language.

### Translating pages from existing language

Each language has a folder corresponding with its [ISO language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes). 

Files in this folder that are currently in English can be edited directly. 

Once the page is translated, (including the front matter title and meta description), please update the `translated` front matter from `false` to `true`. This will remove the "not yet translated" banner from the page.

Raise a pull request :tada:

### Guidelines

A few questions you may have when translating:

- "Open Web Advocacy" should be treated as a proper noun and remain in English.
- Hashtags and social media platform names should be treated as proper nouns and remain in English.
- If the translated language has a formal and informal option, err on the side of direct and informal. For example in Spanish, this would be using the term "tú" instead of "usted". 
When not sure, check out what similiar organisations like Wikipedia, Greenpeace and Mozilla do. Or feel free to reach out to us on [Discord](https://discord.gg/x53hkqrRKx).

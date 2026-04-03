export function highlightWord(keyword: string, words: string[]) {
    const regex = new RegExp(`\\b(${words.join('|')})\\b`, 'gi');
    return keyword.split(regex);
}

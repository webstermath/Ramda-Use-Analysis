function countWord(text, word){
 return (text.match(RegExp(word,'gm')) || []).length
}
var strings = [], content_strings = document.body.innerHTML.split('\n');
for (var i = 0; i < content_strings.length; i++) {
  strings.push(i + 1 + '. ' + content_strings[i]);
}
document.body.innerHTML = strings.join('\n');

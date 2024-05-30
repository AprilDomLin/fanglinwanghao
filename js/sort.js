// 从Markdown文档中提取一级标题，并按字母顺序重新排列
function rearrangeHeadings(markdown) {
    // 匹配Markdown文档中的一级标题（以#开头的行）
    var regex = /^#\s+(.*)$/gm;
    var headings = [];
    var match;

    // 提取一级标题
    while ((match = regex.exec(markdown)) !== null) {
        headings.push(match[1]);
    }

    // 按字母顺序排序一级标题
    headings.sort();

    // 生成新的Markdown文档
    var newMarkdown = markdown.replace(regex, function(match) {
        return '# ' + headings.shift();
    });

    return newMarkdown;
}

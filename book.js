function markdownToTailwindHtml(markdown) {
    // Escape HTML first
    markdown = markdown.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Headings
    markdown = markdown.replace(/^###### (.*$)/gim, '<h6 class="text-sm font-semibold text-bark mb-2">$1</h6>');
    markdown = markdown.replace(/^##### (.*$)/gim, '<h5 class="text-base font-semibold text-bark mb-2">$1</h5>');
    markdown = markdown.replace(/^#### (.*$)/gim, '<h4 class="text-lg font-semibold text-bark mb-2">$1</h4>');
    markdown = markdown.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-bark mb-2">$1</h3>');
    markdown = markdown.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-bark mb-3">$1</h2>');
    markdown = markdown.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-bark mb-4">$1</h1>');

    // Bold and Italic
    markdown = markdown.replace(/\*\*\*(.*?)\*\*\*/gim, '<strong><em>$1</em></strong>');
    markdown = markdown.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold text-bark">$1</strong>');
    markdown = markdown.replace(/\*(.*?)\*/gim, '<em class="italic text-bark/80">$1</em>');

    // Blockquotes
    markdown = markdown.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-bark pl-4 italic text-bark/80 mb-3">$1</blockquote>');

    // Unordered list
    markdown = markdown.replace(/^\s*[-+*] (.*)/gim, '<li class="list-disc ml-6 mb-1">$1</li>');
    markdown = markdown.replace(/(<li.*<\/li>)/gim, '<ul class="mb-4">$1</ul>');

    // Paragraphs
    markdown = markdown.replace(/^(?!<h|<ul|<li|<blockquote)([^<].*)$/gim, '<p class="mb-4 text-bark/90">$1</p>');

    // Links [text](url)
    markdown = markdown.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-blue-600 hover:underline">$1</a>');

    return markdown.trim();
}



const Book = {mdtoHTML: markdownToTailwindHtml}

export default Book
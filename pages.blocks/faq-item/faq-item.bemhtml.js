block('faq-item')(
    content()(function() {
        var parts = this.ctx.question.split(' ');
        var question = [
            parts.slice(0, parts.length - 1).join(' '),
            ' ',
            {
                elem: 'last',
                tag: 'span',
                content: parts.slice(-1)
            }
        ];

        return [
            {
                elem: 'question',
                content: question
            },
            {
                elem: 'author',
                content: this.ctx.author
            },
            {
                elem: 'answer',
                content: this.ctx.answer
            }
        ];
    })
)

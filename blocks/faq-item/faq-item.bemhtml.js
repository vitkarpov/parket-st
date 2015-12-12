block('faq-item')(
    content()(function() {
        return [
            {
                elem: 'question',
                content: this.ctx.question
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

block('aside').mod('catalog', true).content()(function() {
    return {
        block: 'filter',
        content: [
            {
                elem: 'item',
                content: [
                    {
                        elem: 'caption',
                        content: [
                            'Цена за ',
                            {
                                block: 'm2'
                            }
                        ]
                    },
                    {
                        block: 'range-slider',
                        name: 'price',
                        range: {
                            from: 1000,
                            to: 10000,
                            step: 500
                        },
                        value: '1000,4500',
                        mods: {
                            unit: 'rub'
                        }
                    }
                ]
            },
            {
                elem: 'item',
                content: [
                    {
                        elem: 'caption',
                        content: 'Оттенок'
                    },
                    {
                        block: 'filter-colors'
                    }
                ]
            },
            {
                elem: 'item',
                content: [
                    {
                        elem: 'caption',
                        content: 'Класс нагрузки'
                    },
                    {
                        block: 'filter-class'
                    }
                ]
            },
            {
                elem: 'item',
                content: [
                    {
                        elem: 'caption',
                        content: 'Толщина'
                    },
                    {
                        block: 'range-slider',
                        name: 'thickness',
                        range: {
                            from: 2,
                            to: 10,
                            step: 0.5
                        },
                        value: '3,5.5',
                        mods: {
                            unit: 'mm'
                        }
                    }
                ]
            },
            {
                elem: 'item',
                mods: {'countries': true},
                content: [
                    {
                        elem: 'clear',
                        content: {
                            block: 'filter-clear',
                            js: {
                                target: 'countries'
                            }
                        }
                    },
                    {
                        elem: 'caption',
                        content: 'Страна'
                    },
                    ([
                        'Россия', 'Финляндия', 'Польша', 'Австрия', 'Швеция'
                    ]).map(function(item) {
                        return {
                            elem: 'line',
                            content: {
                                block: 'checkbox',
                                mods: {
                                    theme: 'parket'
                                },
                                name: 'countries[]',
                                val: item,
                                text: item
                            }
                        }
                    })
                ]
            },
            {
                elem: 'item',
                mods: {'brands': true},
                content: [
                    {
                        elem: 'clear',
                        content: {
                            block: 'filter-clear',
                            js: {
                                target: 'brands'
                            }
                        }
                    },
                    {
                        elem: 'caption',
                        content: 'Бренды'
                    },
                    ([
                        'HARO', 'AMBERWOOD', 'BARLINEK', 'BAUM', 'COSWICK',
                        'GREEN LINE', 'HARO', 'AMBERWOOD', 'BARLINEK', 'BAUM',
                        'COSWICK', 'GREEN LINE', 'HARO', 'AMBERWOOD', 'BARLINEK'
                    ]).map(function(item) {
                        return {
                            elem: 'line',
                            content: {
                                block: 'checkbox',
                                mods: {
                                    theme: 'parket',
                                    caps: true
                                },
                                name: 'brands[]',
                                val: item,
                                text: item
                            }
                        }
                    })
                ]
            },
            {
                elem: 'item',
                content: {
                    block: 'filter-clear',
                    js: {
                        target: 'filter'
                    },
                    content: 'Сбросить фильтр'
                }
            }
        ]
    }
})

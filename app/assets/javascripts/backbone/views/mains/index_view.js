BackboneTest.Views.Mains ||= {}

class BackboneTest.Views.Mains.IndexView extends Backbone.View
  template: JST["backbone/templates/mains/index"]

  initialize: () ->
    @options.mains.bind('reset', @addAll)

  addAll: () =>
    @options.mains.each(@addOne)

  addOne: (main) =>
    view = new BackboneTest.Views.Mains.MainView({model : main})
    @$("tbody").append(view.render().el)

  render: =>
    $(@el).html(@template(mains: @options.mains.toJSON() ))
    @addAll()

    return this

BackboneTest.Views.Mains ||= {}

class BackboneTest.Views.Mains.MainView extends Backbone.View
  template: JST["backbone/templates/mains/main"]

  events:
    "click .destroy" : "destroy"

  tagName: "tr"

  destroy: () ->
    @model.destroy()
    this.remove()

    return false

  render: ->
    $(@el).html(@template(@model.toJSON() ))
    return this

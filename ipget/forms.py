from django.forms import ModelForm

from .models import Main


class GetLinkForm(ModelForm):
    class Meta:
        model = Main
        fields = ['ip']

    def __init__(self, *args, **kwargs):
        super(GetLinkForm, self).__init__(*args, **kwargs)

        for name, field in self.fields.items():
            field.widget.attrs.update({'class': 'form-control mt-3'})

# Generated by Django 3.0.4 on 2020-07-18 14:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('add_video', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='addvideomodels',
            name='code',
            field=models.CharField(max_length=15),
        ),
    ]
